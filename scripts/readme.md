#Scripts to automate many part of editing and publishing

1. **start-build**: Start the episode with a generated folder structure

    ```
    start-build <3 digit episode number> <small caps topic> <capital lettered topic>
    start-build 038 alfredapp AlfredApp
    ``` 
2. **norm**: After editing the movie and exporting it to a `movie.mov` file, normalise the audio:

    ```
    norm <movie.mov>
    norm 038-alfred.mov
    ``` 
3. **ftp-build**: Upload the normalised movie file `movie.mp4` to the server

    ```
    ftp-build <server> <username> <password>
    ```