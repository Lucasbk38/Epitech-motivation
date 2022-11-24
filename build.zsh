cd ..

cp -r ./src/pages build

lessc ./src/styles/style.less ./build/styles/style.css --source-map
# tsc ./src/scripts/* -outDir ./build/scripts -sourceMap true