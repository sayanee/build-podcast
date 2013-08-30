#Build Podcast ep 049 - CloudFlare
[Screencast link](http://build-podcast.com/cloudflare/)

[CloudFlare](https://www.cloudflare.com/) makes our websites secure and load faster. We can get started with it with just some simple DNS settings to host our pages from github, aws ec2 or even our own computer. In this episode, with CloudFlare's free plan we will explore DNS records, CDN, apps and more!

Similar episodes: [014 Local Web Servers](http://build-podcast.com/local-web-servers/), [016 YSlow](http://build-podcast.com/yslow/), [033 AWS](http://build-podcast.com/aws/)

#Background on CloudFlare 
1. [Main website](https://www.cloudflare.com/) - [Overview](https://www.cloudflare.com/overview), [Plans](https://www.cloudflare.com/plans), [Apps](https://www.cloudflare.com/apps), [Developers](http://developers.cloudflare.com/)
1. [DNS record types](http://en.wikipedia.org/wiki/List_of_DNS_record_types)

#Things to learn with CloudFlare 

##1. add website
1. create account and login
1. [add a website](https://www.cloudflare.com/my-websites) - get to know the various [DNS record types](http://en.wikipedia.org/wiki/List_of_DNS_record_types) and [CloudFlare plans](https://www.cloudflare.com/plans)
1. edit nameservers with your domain registrar and wait for 24 hours
1. explore settings - development mode, cloudflare settings, page rules

##2. add another website

###another sub-domain
1. add a sub-domain e.g. `subdomain.build-podcast.com` in your [cpanel](https://cpanel.net/)
1. transfer a simple `index.html` to the appropriate folder via ftp
1. visit `subdomain.build-podcast.com` - it's not available
1. in CloudFlare, add a CNAME of `subdomain` with an alias os the website
1. give it some time and visit `subdomain.build-podcast.com`

###github pages
1. More info: [custom domain with github pages](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) and [custom domain for github project pages](http://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages), [multiple github pages and custom domain via dns](http://stackoverflow.com/questions/10685961/multiple-github-pages-and-custom-domains-via-dns)
1. add a sub-domain e.g. `ghpages.build-podcast.com` in your [cpanel](https://cpanel.net/)
1. Create a simple `index.html` through [a Github page repo, project pages](https://help.github.com/articles/user-organization-and-project-pages) 
    - create a new github repo
    - create a file `CNAME` with the content `ghpages.build-podcast.com`
    - create new branch `gh-pages`
    - create a simple file `index.html`
    - visit url `github-username.github.io/repo-name`
1. in CloudFlare, add a CNAME of `ghpages` that points to `github-username.github.io`    
1. visit `ghpages.build-podcast.com`

###serve a page from my computer
1. from my computer e.g. `home.build-podcast.com`
1. See episode [014 Local Web Servers](http://build-podcast.com/local-web-servers/)
1. Check with the virtual hosts file on whe Server Name and the corresponding document root `/private/etc/apache2/extra/httpd-vhosts.conf`
1. Start MAC's local apache server with `sudo apachectl start` 
1. Put a simple `index.html` page at port 80 at the document root
1. In your router's network settings map the private port to the public port 80
1. find out your ip address by checking [ipchicken](http://www.ipchicken.com/) or other means
1. visit the website url `your-ip-address`
1. in CloudFlare, add a A Record of `home` that points to `your-ip-address`    


###aws webpage
1. add a sub-domain e.g. `aws.build-podcast.com` in your [cpanel](https://cpanel.net/)
1. Go to [EC2 AWS Management Console](https://console.aws.amazon.com/ec2/v2/home) and launch a new instance
1. See episode [033 AWS](http://build-podcast.com/aws/) - set the security group, download the secutiry file, install httpd, copy over a simple `index.html`
1. visit the public dns url `http://ec2-xx-xx-xx-xx.compute-x.amazonaws.com/`
1. Go to CloudFlare and create a new A record `aws` that points to the IP address found in the EC2 management console as part of the public dns information
1. visit the website `aws.build-podcast.com`

##3. apps
1. CDNJS
1. Google Analytics
1. Google WebMaster Tools
1. Better Browser
1. Highlight
1. Others

##4. cloudflare api

1. query for stats in the last 7 days with [client API](http://www.cloudflare.com/docs/client-api.html)

    ```
    curl https://www.cloudflare.com/api_json.html -d 'a=stats' -d 'tkn=xxxxxxxxxxxxxxxxxxxxxxxxxxx' -d 'email=sayanee@gmail.com' -d 'z=build-podcast.com' -d 'interval=30'
    ```

#More Resources on CloudFlare 
1. [How to setup CloudFlare with NameCheap](http://www.slideshare.net/StanleyTan6/how-to-setup-cloudflare-for-namecheap)
1. [CloudFlare Free content delivery network speed up website tip](http://udinra.com/blog/cloudflare-free-content-delivery-network-speed-up-website)
1. [10 Easy Steps to Setup CloudFlare CDN in WordPress](http://softstribe.com/wordpress/10-easy-steps-to-setup-cloudflare-cdn-in-wordpress)
1. [CloudFlare CDN tutorial](http://www.siteground.com/tutorials/cloud_flare_cdn/)
1. [Video: CloudFlare setup](http://www.youtube.com/watch?v=TI5ST9WBYjM)
1. [Combine CloudFlare with CDN on your blog](http://wp.tutsplus.com/tutorials/hosting/activating-ludicrous-speed-combine-cloudflare-with-a-cdn-on-your-blog/)
1. [AWS Cloudfront](http://aws.amazon.com/cloudfront/) - [CloudFront vs CloudFlare: We have a winner](http://cloud.dzone.com/articles/cloudfront-vs-cloudflare-we)

#Build Link of this episode
[ESO Cast](https://itunes.apple.com/podcast/esocast-hd/id295471183?mt=2) by the [European Southern Observatory](http://www.eso.org/public/teles-instr.html)