#Scripts for automation

1. **build-podcast-start**: Start a new episode

    ```
    build-podcast-start --help
    build-podcast-start -d [YYYY-MM-DD] -n [NNN] -e [episode-lowercase] -E "[Episode Uppercase]"
    build-podcast-start -d 2013-12-24 -n 089 -e rasberrypi -E "RasberryPI"
    ``` 
1. **build-podcast**: Continue preparing for the current episode

    ```
    build-podcast
    ``` 

1. **build-podcast-record** Start recording the screencast. It will open the following:
    - YYYY-MM-DD-episode-lowercase.md
    - QuickTime
    - Audio Midi
    - System Preferences
    - Apache server
    - Start screen

     ```
     build-podcast-record
     ```  
  
3. **ftp-build**: Upload the normalised movie file `movie.mp4` to the server

    ```
    ftp-build <server> <username> <password>
    ```