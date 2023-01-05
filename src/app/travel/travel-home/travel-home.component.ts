import { Component, OnInit } from '@angular/core';
import { NavBarServiceService } from 'src/app/nav-bar-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-travel-home',
  templateUrl: './travel-home.component.html',
  styleUrls: ['./travel-home.component.css']
})
export class TravelHomeComponent implements OnInit {

  isMediaViewerOpen = false
  currentMediaIndex = -1

  constructor(private navbarService:NavBarServiceService) { }

  // assets='./assets/' //for deployment
  // assets='../../../assets/' //for local
  // ---data is dummy here, it will be overridden by ngOnInit()
  assets = environment.assets;
  mediaData = [{
    url: this.assets + "images/travel/img_0001.jpg",
    isImage: true
  }]

  // @Output() navbarEmitter=new EventEmitter<any>();
  ngOnInit(): void {
    this.mediaData = this.generateMediaData();
    // this.navbarEmitter.emit(false);
    // this.navbarService.navbarVisibilityTrigger.next();

  }


  // mediaData=[
  //   {
  //     url:this.assets+"images/trishankSinghMahur.jpg",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/angular.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/java.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/c.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/arduino.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/matlab.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/python.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/trishankSinghMahur.jpg",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/angular.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/java.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/c.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/arduino.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/matlab.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/python.png",
  //     isImage:true
  //   },
  //   {
  //     url:this.assets+"images/trishankSinghMahur.jpg",
  //     isImage:true
  //   }
  // ]

  //

  /*
  mediaData=[
    {
      url:this.assets+"images/travel/img_0001.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0002.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0003.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0004.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0005.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0006.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0007.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0008.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0009.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0010.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0011.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0012.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0013.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0014.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0015.jpg",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0016.webp",
      isImage:true
    }
    ,
    {
      url:this.assets+"images/travel/img_0017.webp",
      isImage:true
    }
    ,
    {
      url:this.assets+"images/travel/img_0018.webp",
      isImage:true
    }
    ,
    {
      url:this.assets+"images/travel/img_0019.webp",
      isImage:true
    }
    ,
    {
      url:this.assets+"images/travel/img_0020.webp",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0021.webp",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0022.webp",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0023.webp",
      isImage:true
    },
    {
      url:this.assets+"images/travel/img_0024.webp",
      isImage:true
    }

    ]
    */
  /*
      mediaData=[
        {
          url:this.assets+"images/travel/img_0001.jpg",
          isImage:true
        },
        {
          url:this.assets+"images/travel/img_0002.jpg",
          isImage:true
        },
        {
          url:this.assets+"images/travel/img_0003.jpg",
          isImage:true
        },
        {
          url:this.assets+"images/travel/img_0004.jpg",
          isImage:true
        },
        {
          url:this.assets+"images/travel/img_0005.jpg",
          isImage:true
        },
        {
          url:this.assets+"images/travel/img_0006.jpg",
          isImage:true
        },
        {
          url:this.assets+"images/travel/img_0007.jpg",
          isImage:true
        },
        {
          url:this.assets+"images/travel/vid_test.mp4",
          isImage:false
        }
      ]
      */


  generateMediaData(): any[] {
    var mD = [];
    for (let index = 1; index <= 48; index++) {
      mD.push({
        url: this.assets + "images/travel/resized/img (" + index + ").jpg",
        isImage: true
      });

    }
    mD.push({
      url: this.assets + "images/travel/vid_test.mp4",
      isImage: false
    });
    mD.push({
      url: this.assets + "images/travel/vid_test2.mp4",
      isImage: false
    });
    return mD;
  }

  updateCurrentMediaClickedIndex(emittedCurrentMediaIndex: any) {
    console.log("updateCurrentMediaClickedIndex")
    // if want to update the media if clicked on another after viewing 
    // this.closeMediaViewer(true);

    this.currentMediaIndex = emittedCurrentMediaIndex;
    this.isMediaViewerOpen = true

    // hide nav bar before opening media-viewer
    this.navbarService.isShowNavBar = false
  }

  closeMediaViewer(isClosed: any) {
    // this.isMediaViewerOpen=isClosed
    this.isMediaViewerOpen = false
    //make display none for viewer

    // show nav bar after closing media-viewer
    this.navbarService.isShowNavBar = true
  }
}
