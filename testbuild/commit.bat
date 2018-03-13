@echo off
set /p update="Enter Changes: "
cls
@echo Processing 1/8 [=-------]
cd ../
cls
@echo Processing 2/8 [==------]
git config --global user.email 33796301+OrigamiYoda729@users.noreply.github.com
cls
@echo Processing 3/8 [===-----]
git config --global user.name OrigamiYoda729
cls
@echo Processing 4/8 [====----]
git init
cls
@echo Processing 5/8 [=====---]
git pull https://github.com/OrigamiYoda729/library.js.git master
cls
@echo Processing 6/8 [======--]
git add --all
cls
@echo Processing 7/8 [=======-]
git commit -m "%update%"
cls
@echo Processing 8/8 [========]
git push https://github.com/OrigamiYoda729/library.js.git master
cls
@echo Complete! Press Enter to Exit
set /p enter=""