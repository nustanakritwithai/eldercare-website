// Google Maps Types
declare global {
  interface Window {
    google: {
      maps: {
        Map: new (container: HTMLElement, options?: any) => any;
        Marker: new (options?: any) => any;
        Geocoder: new () => {
          geocode: (request: any, callback: (results: any[], status: string) => void) => void;
        };
        Size: new (width: number, height: number) => any;
        places: any;
      };
    };
  }
}

export {};
