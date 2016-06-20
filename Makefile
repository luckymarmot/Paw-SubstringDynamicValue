identifier=com.luckymarmot.PawExtensions.SubstringDynamicValue
extensions_dir=$(HOME)/Library/Containers/com.luckymarmot.Paw/Data/Library/Application Support/com.luckymarmot.Paw/Extensions/

build:
	mkdir -p ./build/$(identifier)/
	cp README.md LICENSE SubstringDynamicValue.js ./build/$(identifier)/

clean:
	rm -Rf ./build/

install: clean build
	mkdir -p "$(extensions_dir)$(identifier)/"
	cp -r ./build/$(identifier)/* "$(extensions_dir)$(identifier)/"

archive: build
	cd ./build/; zip -r SubstringDynamicValue.zip "$(identifier)/"
