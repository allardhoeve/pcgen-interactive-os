#!/bin/bash

cd $(dirname $0)

perl -p -e 's/^\s+\|/|/g' interactive.htm > csheet_interactive.htm
