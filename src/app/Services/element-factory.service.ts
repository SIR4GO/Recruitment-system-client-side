import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class ElementFactoryService {

  constructor() { }


  static CreateElement(type , parent:HTMLElement)
  {

    // reduce margin for last child to cancel 50px margin last add  below
    $(parent.lastChild).css('margin-bottom' , '10px');


    if(type.includes("text"))
      {
        const container = document.createElement('div');
        const textarea = document.createElement('textarea');
        const overlay = document.createElement('div');
        container.appendChild(textarea );
        container.appendChild(overlay );


        parent.appendChild(container);

        // increase margin for new last element
        $(parent.lastChild).css('margin-bottom' , '50px');

        return {type:"text", bag: container , input: textarea  , overlay: overlay};
      }

      if(type.includes("image"))
      {
        const container = document.createElement('div');
        const image = document.createElement('image');
        const overlay = document.createElement('div');
        container.appendChild(image );
        container.appendChild(overlay );

        parent.appendChild(container);

        // increase margin for new last element
        $(parent.lastChild).css('margin-bottom' , '50px');

        return {type:"image", bag: container , input: image  , overlay: overlay};
      }

      if(type.includes("video"))
      {
        const container = document.createElement('div');
        const video = document.createElement('video');
        const overlay = document.createElement('div');
        container.appendChild(video );
        container.appendChild(overlay );

        parent.appendChild(container);

        // increase margin for new last element
        $(parent.lastChild).css('margin-bottom' , '50px');

        return {type:"video" , bag: container , input: video  , overlay: overlay};
      }


      if(type.includes("audio"))
      {
        const container = document.createElement('div');
        const audio = document.createElement('audio');
        const overlay = document.createElement('div');
        container.appendChild(audio );
        container.appendChild(overlay );

        parent.appendChild(container);

        // increase margin for new last element
        $(parent.lastChild).css('margin-bottom' , '50px');

        return {type:"audio" , bag: container , input: audio  , overlay: overlay};
      }



    return null;
  }


  static ElementOptimizations( elements ){

     const type:String = elements.type;
     const container:HTMLElement = elements.bag;
     const input:HTMLElement = elements.input;
     const targetOverlay:HTMLElement = elements.overlay;


      // container element
      const bag = $(container);
      bag.css({
        "width":"200px",
        "height":"100px",
        "border":"1px solid"
      });
      bag.draggable({containment: ".topic-sheet" }).resizable({ cancel: ".cancel"});

      // overlay
      const overlay = $(targetOverlay);
      overlay.addClass('mobile-overlay');

    if(type.includes("text"))
     {

       // text area
       const textarea = $(input);
       textarea.css({
         "width":"100%",
         "height":"100%"
       });

     }

    if(type.includes("image"))
    {

      // image
      const image = $(input);
      image.css({
        "width":"100%",
        "height":"100%",

      });

    }

    if(type.includes("video"))
    {

      // video
      const video = $(input);
      video.css({
        "width":"100%",
        "height":"100%",

      });

    }


    if(type.includes("audio"))
    {
      // audio
      const audio = $(input);
      audio.css({
        "width":"100%",
        "height":"100%",
        "border":"1px solid"
      });



    }
  }

  static AddingElementsEvents({}){}









}
