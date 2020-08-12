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