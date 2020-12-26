GIT_COMMITTER_DATE="2020-08-12T11:43:02" git commit --amend --date="2020-08-12T11:43:02"
GIT_COMMITTER_DATE="Dec 26 12:11:00 2020 -0300" git commit --amend --no-edit --date="Dec 26 12:11:00 2020 -0300" && git push -f

GIT_COMMITTER_NAME="Felipe Barros" GIT_COMMITTER_EMAIL="felipetech@tuta.io" GIT_AUTHOR_NAME="Felipe Barros" GIT_AUTHOR_EMAIL="felipetech@tuta.io" GIT_COMMITTER_DATE="Mon Sept 22 23:08:00 2020 -0300" git commit --amend --author="Felipe Barros <felipetech@tuta.io>" --no-edit --date="Mon Sept 22 23:08:00 2020 -0300"

git filter-branch --env-filter \
    'if [ $GIT_COMMIT = d3871686b9a46105737068b92062e9b3dd81eaa3 ]
     then
         export GIT_AUTHOR_DATE="Wed Aug 12 10:45:30 2020 -0300"
         export GIT_COMMITTER_DATE="Wed Aug 12 10:45:30 2020 -0300"
     fi'

git filter-branch --env-filter \
    'if [ $GIT_COMMIT = d0bf7a9182d28161889f9b061d0e5975b7d0a992 ]
     then
         export GIT_AUTHOR_DATE="Wed Aug 12 10:57:32 2020 -0300"
         export GIT_COMMITTER_DATE="Wed Aug 12 10:57:32 2020 -0300"
     fi'