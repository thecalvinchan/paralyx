#Paralyx

I'm starting this project as a satirical piece on how a lot of sites suffer from poor performance because of extraneous and unnecessary parallax features. However, I haven't yet decided whether I actually want to create a lightweight parallax library, or just make it as inefficient as possible just for the lols. But for now, I'm naming it Paralyx, because it sounds look a cool start-up name (a combination of Paralyze and Parallax)

##Dependencies

JQUERY YAH

##Documentation

Paralyx is backed by the notion of frames. Parallax animations are organized into various frames, and the animations themselves are not triggered until a particular frame is reached.

    <div class="paralyx-frame" paralyx-start="0" paralyx-end"150">

Frames are created by including the class `paralyx-frame`. Frames are triggered based on two additional attributes, `paralyx-start` and `paralyx-end`. These two attributes specify the start and end of a frame animation based on the scroll offset from the top of the document.

Within each frame, we have the actual parallax objects. A parallax object is created by including the class `paralyx-obj`.

    <div class="paralyx-obj move-down" paralyx-level="1">

Parallax objects either move up, down, left, or right. The parallax animation is specified by the classes `move-up`, `move-down`, `move-left`, and `move-right`, respectively. An additional Number paramter, `paralyx-level`, is used to specify the magnitude of the parallax animation. 
