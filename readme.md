####[Build Podcast](http://build-podcast.com) is a show about technology tools for design and development. Each week, [Sayanee](http://sayan.ee) will be creating a screencast that will take you through step-by-step in using one tool to build a little project, all in the fun spirit of hacking, creating and building stuff!

Each episode uses a [MAC OS X Mountain Lion](http://en.wikipedia.org/wiki/OS_X_Mountain_Lion) operating system in a [MacBook Pro machine](http://support.apple.com/kb/sp541) and assumes that the viewer has an intermediate level of understanding in development of software/hardware to pick up new tools for building stuff.

Why a show on **tools** you might ask? Because humans are essentially **tools builders**, and we have [an immense chance to shape our envionment](https://vimeo.com/34017777) in that way.

> We shape our tools and then our tools shape us. ~ Marshall McLuhan

> Computers are like a bicycle for our minds. ~ Steve Jobs

Most importantly, [Build Podcast](http://build-podcast.com) is a direct reflection of my personal journey through the vibrant world of technology. Each week, I discipline myself to go in depth into just one tool and in the process, share it with the entire world. If you found it useful, [i would be so happy to hear it](http://twitter.com/sayanee_) and get your ideas on improvements!


##Equipment and tools used for the screencasts:

Big thanks to the open source community and free softwares!

1. [C01U USB Studio Condensor Microphone](http://www.samsontech.com/samson/products/microphones/usb-microphones/c01u/) generously gifted by [Preetam Rai](https://twitter.com/preetamrai)
2. [Audacity](http://audacity.sourceforge.net/) and [Audio MIDI Setup](http://en.wikipedia.org/wiki/Audio_MIDI_Setup) to check sound quality before recording and export video format `*.mov`
2. [Quicktime](http://www.apple.com/quicktime/download/) to record the screencasts
3. [mouse locator](http://mouse-locator.en.softonic.com/mac) to highlight portions during screencast
7. [keycastr](http://download.cnet.com/KeyCastr/3000-2075_4-125977.html) to display your keystrokes while recording screencasts
3. [iMovie](http://www.apple.com/ilife/imovie/) to edit the screencasts and export `*.mov` video file
4. [ffmpeg](http://ffmpeg.org/) for video and normalised audio exports

    ```
    # change format from mov to mp4 for web video
    ffmpeg -i imovie-output.mov -c copy new-video-format.mp4
    
    # extract just the audio
    ffmpeg -i input-video.mp4 audio.wav 
    
    # normalise audio and recombine with video
    ffmpeg -i input-video-without-audio-normalisation.mp4 -i audio.output.wav -vcodec copy -acodec aac -strict experimental -ac 2 -ab 114k -map 0:0 -map 1:0 output-video-with-audio-normalisation.mp4
    ```
5. [Levelator](http://www.conversationsnetwork.org/levelator) for audio normalisation (if ffmpeg is not used)


##License

![Creative Commons](http://i.creativecommons.org/l/by/3.0/88x31.png)

[Build Podcast](http://build-podcast.com/) by [Sayanee](http://sayan.ee/) is licensed under a [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/deed.en_US).





