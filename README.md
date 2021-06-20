# COLLEGE SEARCH README

Simple college search app. Search for colleges by name. Can be the full name, or partial using %Florida% if you wanted to find all Universities with Florida in their name.

Tech used:

* Rails 6

* React

* Bootstrap

* College Scorecard Data API

Tech that could be used:

* Postgresql to cache results & track number of searches per query

* Tests, unforunately I ran out of time to add in all of the tests I wanted. I did add VCR to test the API, but never got a chance to add it in.

### The results are the ID from the Scorecard Database, the name, and the size of students in 2018 (most recent year)

## Setup

* yarn install

* rails db:create

* Follow .env.sample and create a .env file with your own API Keys for Google Maps & Places as well as the College Scorecard API

* rails s in one tab

* ./bin/webpack-dev-server in a second tab

* Type in a school name and click search
