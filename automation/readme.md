#Scripts for automation

1. **Start a new episode**

    ```shell
    $ bp new
    ```
    - make new Jekyll post from template
    - make new sample code folder in repo
    - make new sample code folder on Desktop

- **Continue an on-going episode**

    ```shell
    $ bp open
    ```
    - open post file to add on more notes
    - open sample code folder

- **Record an on-going episode**

    ```shell
    $ bp record
    ```

    - Check if the microphone is connected
    - Open various apps needed during recording
    - Open start screen and start apache
    - Open show notes for reference

- **Publish an episode**

    ```shell
    $ bp pub
    ```

    - Stop apache server
    - Normalise video
    - Upload video via FTP, YouTube and Vimeo
    - Copy sample code from Desktop to repo
    - Update post meta data
    - Push to Github pages

- **Open build podcast website locally**

    ```shell
    $ tmuxinator bp
    ```

- **Reduce a video file size**

    ```shell
    $ ffmpeg -i input.{mp4|mov} -r 25 -b:v 500k output.{mp4|mov}
    ```
