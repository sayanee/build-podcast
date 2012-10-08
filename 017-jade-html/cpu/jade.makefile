JADE = $(shell find jade/*.jade)
HTML = $(patsubst jade/%.jade, %.html, $(JADE))

all: $(HTML)

%.html: jade/%.jade
	jade < $< --out $< --path $< --pretty > $@

clean:
	rm -f $(HTML)

.PHONY: clean