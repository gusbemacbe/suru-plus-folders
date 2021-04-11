adwaita()
{
  THEME="adwaita-plus"
  THEME_NAME="Adwaita++"

  CAMINHO="$HOME/GitHub/Andrea/$THEME-beta/$THEME_NAME/places/scalable"
  DESTINO="$HOME/GitHub/Gustavo/suru-plus-folders-site-hugo/static/assets/images/icons/$THEME"

  # echo $CAMINHO;
  # echo $DESTINO;

  cp -rf $CAMINHO/folder-{synthwave,tron,void}-{app,documents,download,dropbox,gitlab,music,open,pictures,visiting}.svg $DESTINO
  cp -rf $CAMINHO/folder-{synthwave,tron,void}.svg $DESTINO

  echo "Ready!"
  echo ""
  echo "Renaming 'app' to 'apps'"

  cd $DESTINO

  perl-rename 's/app/apps/' *
  perl-rename 's/appss/apps/' *

  echo ""
  echo "Renaming 'download' to 'downloads'"

  perl-rename 's/download/downloads/' *
  perl-rename 's/downloadss/downloads/' *
}

choose()
{
  echo "Choose a theme: "
  read theme_choice
  echo "Copying the icons from $theme_choice()..."
  $theme_choice
}

choose