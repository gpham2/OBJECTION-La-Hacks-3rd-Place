#!/bin/bash

kill $(lsof -i:8000 -t)