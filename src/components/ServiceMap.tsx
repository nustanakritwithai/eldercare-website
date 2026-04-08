import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Navigation, Phone, Clock, Search } from 'lucide-react';

// Service locations
const serviceAreas = [
  { id: 1, name: 'รพ.จุฬาลงกรณ์', lat: 13.7308, lng: 100.5344, type: 'hospital' },
  { id: 2, name: 'รพ.รามาธิบดี', lat: 13.7658, lng: 100.5244, type: 'hospital' },
  { id: 3, name: 'รพ.ศิริราช', lat: 13.7598, lng: 100.4864, type: 'hospital' },
  { id: 4, name: 'รพ.กรุงเทพ', lat: 13.7438, lng: 100.5504, type: 'hospital' },
  { id: 5, name: 'ศูนย์บริการ ElderCare สาขาสุขุมวิท', lat: 13.7408, lng: 100.5644, type: 'center' },
  { id: 6, name: 'ศูนย์บริการ ElderCare สาขาลาดพร้าว', lat: 13.7808, lng: 100.5944, type: 'center' },
];

// Google Maps API Key
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

export default function ServiceMap() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<typeof serviceAreas[0] | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY) {
      console.warn('Google Maps API Key not configured');
      return;
    }

    const existingScript = document.getElementById('google-maps-script');
    if (existingScript) {
      if (window.google) initMap();
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setIsMapLoaded(true);
      initMap();
    };
    document.head.appendChild(script);
  }, []);

  const initMap = () => {
    if (!mapRef.current || !(window as any).google) return;

    const google = (window as any).google;
    const bangkok = { lat: 13.7563, lng: 100.5018 };
    
    const newMap = new google.maps.Map(mapRef.current, {
      center: bangkok,
      zoom: 12,
    });

    setMap(newMap);

    serviceAreas.forEach((area) => {
      const marker = new google.maps.Marker({
        position: { lat: area.lat, lng: area.lng },
        map: newMap,
        title: area.name,
        icon: {
          url: area.type === 'hospital' 
            ? 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
            : 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          scaledSize: new google.maps.Size(40, 40),
        },
      });

      marker.addListener('click', () => {
        setSelectedLocation(area);
      });
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(pos);
          newMap.setCenter(pos);
          
          new google.maps.Marker({
            position: pos,
            map: newMap,
            title: 'ตำแหน่งของคุณ',
            icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
              scaledSize: new google.maps.Size(40, 40),
            },
          });
        },
        () => {
          console.log('Error getting location');
        }
      );
    }
  };

  const handleSearch = () => {
    if (!map || !searchQuery || !(window as any).google) return;
    
    const google = (window as any).google;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: searchQuery + ' กรุงเทพ' }, (results: any, status: string) => {
      if (status === 'OK' && results[0]) {
        map.setCenter(results[0].geometry.location);
        map.setZoom(15);
      }
    });
  };

  const getDirections = (destination: typeof serviceAreas[0]) => {
    if (!userLocation) {
      alert('กรุณาอนุญาตให้เข้าถึงตำแหน่งของคุณ');
      return;
    }
    
    const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${destination.lat},${destination.lng}&travelmode=driving`;
    window.open(url, '_blank');
  };

  return (
    <section id="service-map" className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900 relative">
      <div className="section-container">
        <div className="section-inner">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
              พื้นที่ให้บริการ
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              ค้นหาพื้นที่<span className="gradient-text">ให้บริการ</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              ดูพื้นที่ให้บริการและโรงพยาบาลที่เรารองรับ พร้อมระบบนำทาง
            </p>
          </motion.div>

          {!GOOGLE_MAPS_API_KEY && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-2xl mx-auto mb-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl"
            >
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                ⚠️ Google Maps API Key ยังไม่ได้ตั้งค่า กรุณาเพิ่ม VITE_GOOGLE_MAPS_API_KEY ในไฟล์ .env
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="ค้นหาที่อยู่หรือพื้นที่..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={!isMapLoaded}
                className="btn-primary px-6 disabled:opacity-50"
              >
                ค้นหา
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid lg:grid-cols-3 gap-6"
          >
            <div className="lg:col-span-2">
              <div
                ref={mapRef}
                className="w-full h-[400px] lg:h-[500px] rounded-2xl shadow-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center"
              >
                {!isMapLoaded && (
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-500 dark:text-slate-400">กำลังโหลดแผนที่... (ต้องการ Google Maps API Key)</p>
                  </div>
                )}
              </div>
              
              <div className="mt-4 flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">โรงพยาบาล</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">ศูนย์บริการ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">ตำแหน่งของคุณ</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 max-h-[500px] overflow-y-auto">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                สถานที่ให้บริการ
              </h3>
              
              <div className="space-y-3">
                {serviceAreas.map((area) => (
                  <motion.div
                    key={area.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => {
                      setSelectedLocation(area);
                      if (map) {
                        map.setCenter({ lat: area.lat, lng: area.lng });
                        map.setZoom(15);
                      }
                    }}
                    className={`p-4 rounded-xl cursor-pointer transition-all ${
                      selectedLocation?.id === area.id
                        ? 'bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500'
                        : 'bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        area.type === 'hospital' 
                          ? 'bg-red-100 dark:bg-red-900/30' 
                          : 'bg-blue-100 dark:bg-blue-900/30'
                      }`}>
                        <MapPin className={`w-5 h-5 ${
                          area.type === 'hospital'
                            ? 'text-red-600 dark:text-red-400'
                            : 'text-blue-600 dark:text-blue-400'
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          {area.name}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          {area.type === 'hospital' ? 'โรงพยาบาล' : 'ศูนย์บริการ'}
                        </p>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            getDirections(area);
                          }}
                          className="mt-2 text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
                        >
                          <Navigation className="w-4 h-4" />
                          นำทางไปที่นี่
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-12 grid sm:grid-cols-3 gap-6"
          >
            {[
              { icon: MapPin, title: '50+ พื้นที่', desc: 'ครอบคลุมทั่วกรุงเทพและปริมณฑล' },
              { icon: Clock, title: '24 ชั่วโมง', desc: 'ให้บริการตลอดเวลา' },
              { icon: Phone, title: 'ติดต่อสอบถาม', desc: '02-XXX-XXXX' },
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
