@echo off
set /p update="Enter Changes: "
cls
@echo Processing 1/7 [=------]
git config --global user.email 33796301+OrigamiYoda729@users.noreply.github.com
cls
@echo Processing 2/7 [==-----]
git config --global user.name OrigamiYoda729
cls
@echo Processing 3/7 [===----]
git init
cls
@echo Processing 4/7 [====---]
git pull https://github.com/OrigamiYoda729/library.js.git master
cls
@echo Processing 5/7 [=====--]
git add --all
cls
@echo Processing 6/7 [======-]
git commit -m "Update: %update%"
cls
@echo Processing 7/7 [=======]
git push https://github.com/OrigamiYoda729/library.js.git master
cls
@echo Complete! Press Enter to Exit
set /p enter=""