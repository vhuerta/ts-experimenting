export  interface Mappable {
  color: string,
  markerContent(): string,
  location: {
    lat: number;
    lng: number;
  };
}

export default class CustomMap {

  private map: google.maps.Map;
  

  constructor(elementId: string) {
    this.map = new google.maps.Map(document.getElementById(elementId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable) {
    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent()
    });
    
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  }

}

