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

Before re-using the materials, take note of the following:

1. **Date** *[column 2]*
  - Each episode has a release date. The more recent the date, the more accurate is the information.
- **Episode version vs current version** *[column 3 & 4]*
  - Each episode has a version number of the tool discussed. Before re-sharing or re-editing take note of the tool's current version and the episode's tool [version compatibility](http://semver.org/).
- **Note** *[column 5]*
  - Scan through the notes to check what the video screencast covers. This will take a much shorter time than watching the screencast itself.

##Materials

Links for the **video files** and **show notes** are found in the table below.

<a name="links"></a>
##Quick links

<table>
  <tr>
    <th>Title</th>
    <th>Date</th>
    <th>Episode version</th>
    <th>Current version</th>
    <th>Notes</th>
    <th>Video file</th>
  </tr>
  {% for post in site.posts %}
  <tr>
    <td>{{post.title}}</td>
    <td>{{ post.date | date_to_string }}</td>
    <td>{{ post.version }}</td>
    <td>{% if post.website %}<a href="{{ post.website }}">current version</a>{% endif %}</td>
    <td><a href="{{ site.url }}{{ post.url }}">notes</a></td>
    <td><a href="{{post.enclosure}}">video</a></td>
  </tr>
  {% endfor %}
</table>
