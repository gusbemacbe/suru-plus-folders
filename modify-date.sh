git filter-branch --env-filter \
    'if [ $GIT_COMMIT = 0ff36d1a43b79da76742c2675996352b2043b4b8 ]
     then
         export GIT_AUTHOR_DATE="Fri Aug 12 11:08:30 2020 -0300"
         export GIT_COMMITTER_DATE="Sat Aug 12 11:08:30 2020 -0300"
     fi'