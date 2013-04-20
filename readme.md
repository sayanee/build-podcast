####[Build Podcast](http://build-podcast.com) is a show about technology tools for design and development. Each week, [Sayanee](http://sayan.ee) will be creating a screencast that will take you through step-by-step in using one tool to build a little project, all in the fun spirit of hacking, creating and building stuff!

Related links:

- [Main website](https://github.com/sayanee/build-podcast)
- [RSS Feed](http://feeds.feedburner.com/BuildPodcastVideos)
- [Youtube channel](http://www.youtube.com/playlist?list=PLA83DE2909F468A14)
- [Vimeo channel](https://vimeo.com/channels/441355)
- [iTunes subscription](https://itunes.apple.com/us/podcast/build-podcast-screencast/id538677863)
- [Github](https://github.com/sayanee/build-podcast) and [open issues](https://github.com/sayanee/build-podcast/issues?page=1&state=open)

##Synopsis


Each episode uses a [MAC OS X Mountain Lion](http://en.wikipedia.org/wiki/OS_X_Mountain_Lion) operating system in a [MacBook Pro machine](http://support.apple.com/kb/sp541) and assumes that the viewer has an intermediate level of understanding in development of software/hardware to pick up new tools for building stuff.

Why a show on **tools** you might ask? Because humans are essentially **tools builders**, and we have [an immense chance to shape our envionment](https://vimeo.com/34017777) in that way.

> We shape our tools and then our tools shape us. ~ Marshall McLuhan

> Computers are like a bicycle for our minds. ~ Steve Jobs

Most importantly, [Build Podcast](http://build-podcast.com) is a direct reflection of my personal journey into the vibrant world of technology throughout the [layers of abstraction in modern computing](https://twitter.com/sayanee_/status/277641534441136128). Each week, I discipline myself to go in depth into just one tool and in the process, share it with the entire world.

If you found Build Podcast useful, [i would be so happy to hear it](http://twitter.com/sayanee_) and get your ideas on what technology tool I should next pick up!



##Equipment and tools used for capturing and editing:

Big thanks to the open source community and free softwares!

1. [C01U USB Studio Condensor Microphone](http://www.samsontech.com/samson/products/microphones/usb-microphones/c01u/) generously gifted by [Preetam Rai](https://twitter.com/preetamrai)
2. [SwitchResX 4](http://www.madrau.com/download/latest/latest.html) to switch my screen resolution to `1280 x 720` and keep my notes in a dual monitor to refer while recording
2. [Audacity](http://audacity.sourceforge.net/) and [Audio MIDI Setup](http://en.wikipedia.org/wiki/Audio_MIDI_Setup) to check sound quality before recording and export video format `*.mov`
2. [Quicktime](http://www.apple.com/quicktime/download/) to record the screencasts
3. [mouse locator](http://mouse-locator.en.softonic.com/mac) to highlight portions during screencast
7. [keycastr](http://download.cnet.com/KeyCastr/3000-2075_4-125977.html) to display your keystrokes while recording screencasts
3. [iMovie](http://www.apple.com/ilife/imovie/) to edit the screencasts and export `*.mov` video file
4. [ffmpeg](http://ffmpeg.org/) for video and normalised audio exports
5. [Sox](http://sox.sourceforge.net/) for normalising audio
6. [Levelator](http://www.conversationsnetwork.org/levelator) for audio normalisation (if sox is not used)
7. Automation with scripts:


    - Start a new episode with a new folder and a readme file with [shell script start-build](/scripts/start-build):
    
    
    ```
    $ start-build <episode number> <lowercase topic> <uppercase topic>
    ```

    - After exporting the edited video, normalise audio with the [shell script norm](/scripts/norm):
    
    ```
    $ norm screencast.mov
    screencast.mp4
    ```
    
    - Upload `screencast.mp4` via ftp using the [shell script fit-build](/scripts/ftp-build) that will upload the latest file (screencast.mp4) on the Desktop
       
    ```
    $ ftp-build <server> <username> <password>
    ```


##License

![Creative Commons](http://i.creativecommons.org/l/by/3.0/88x31.png)

[Build Podcast](http://build-podcast.com/) by [Sayanee](http://sayan.ee/) is licensed under a [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/deed.en_US).

##Contact

[Tweet](http://twitter.com/sayanee_) me

