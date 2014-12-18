---
layout: post
tags: tutorial, screencast, technology, development, share, public, domain, video, notes
description: This page describes how to reuse content from this project.
title: Share
date:   2014-12-18 12:00:00
permalink: /share/
---

####[Build Podcast](http://build-podcast.com) project videos, notes and contents are in the [Public Domain](http://creativecommons.org/publicdomain/zero/1.0/). Hence, feel free to use it in any way you wish!

<a name="note"></a>
##Things to take note

1. **Date** - Each episode has a date. The more recent the date, the more accurate will be the information.
- **Version** - Each episode has a version number of the tool discussed. Before re-sharing or re-editing take note of the tool's current version and the episode's tool version compatibility.

##Quick links

<table>
  <tr>
    <th>Title</th>
    <th>Episode released Date</th>
    <th>Show Notes</th>
    <th>Video file</th>
  </tr>
  {% for post in site.posts %}
  <tr>
    <td>{{post.title}}</td>
    <td>{{ post.date | date_to_string }}</td>
    <td><a href="{{ site.url }}{{ post.url }}">link</a></td>
    <td><a href="{{post.enclosure}}">link</a></td>
  </tr>
  {% endfor %}
</table>
