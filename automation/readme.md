#Scripts for automation

1. **Start a new episode**

    ```
    bp new sample.conf
    ``` 
    - make new Jekyll post from template
    - make new sample code folder in repo
    - make new sample code folder on Desktop
    
1. **Continue an on-going episode**

    ```
    bp serve sample.conf
    ``` 
    - open post file to add on more notes
    - open sample code folder

1. **Record an on-going episode** 

    ```
    bp record sample.conf
    ```
 
    - Check if the microphone is connected
    - Open various apps needed during recording
    - Open start screen and start apache
    - Open show notes for reference

1. **Publish an episode**

    ```
    bp pub sample.conf
    ```
    
    - Stop apache server
    - Normalise video
    - Upload video via FTP, YouTube and Vimeo
    - Copy sample code from Desktop to repo
    - Update post meta data
    - Push to Github pages