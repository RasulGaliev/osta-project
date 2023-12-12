import {Injectable} from "@angular/core";
import {EventsModel} from "../models/events.model";

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  getEvents(): EventsModel[] {
    return [
      {
        id: 1,
        title: 'Что же произошло на этом фото? Наверное, надо написать текстом что-то интересное1 ',
        text: '',
        image: '../../assets/server/events/event.png'
      },
      {
        id: 2,
        title: 'Что же произошло на этом фото? Наверное, надо написать текстом что-то интересное2 ',
        text: '',
        image: '../../assets/server/events/event.png'
      },
      {
        id: 3,
        title: 'Что же произошло на этом фото? Наверное, надо написать текстом что-то интересное3 ',
        text: '',
        image: '../../assets/server/events/event.png'
      },
      {
        id: 4,
        title: 'Что же произошло на этом фото? Наверное, надо написать текстом что-то интересное4 ',
        text: '',
        image: '../../assets/server/events/event.png'
      },
      {
        id: 5,
        title: 'Что же произошло на этом фото? Наверное, надо написать текстом что-то интересное5 ',
        text: '',
        image: '../../assets/server/events/event.png'
      },
      {
        id: 6,
        title: 'Что же произошло на этом фото? Наверное, надо написать текстом что-то интересное6 ',
        text: '',
        image: '../../assets/server/events/event.png'
      }
    ]

  }
}
