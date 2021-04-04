# GNU make is required to run this file. To install on *BSD, run:
#   gmake PREFIX=/usr/local install

PREFIX ?= /usr
PROGNAME := suru-plus-folders

all:

install:
	mkdir -p $(DESTDIR)$(PREFIX)/bin
	install -m 755 $(PROGNAME) $(DESTDIR)$(PREFIX)/bin
	mkdir -p $(DESTDIR)$(PREFIX)/share/bash-completion/completions
	install -m 644 completion/$(PROGNAME) \
		$(DESTDIR)$(PREFIX)/share/bash-completion/completions
	mkdir -p $(DESTDIR)$(PREFIX)/share/zsh/vendor-completions
	install -m 644 completion/_$(PROGNAME) \
		$(DESTDIR)$(PREFIX)/share/zsh/vendor-completions

uninstall:
	rm -f $(DESTDIR)$(PREFIX)/bin/$(PROGNAME)
	rm -f $(DESTDIR)$(PREFIX)/share/bash-completion/completions/$(PROGNAME)
	rm -f $(DESTDIR)$(PREFIX)/share/zsh/vendor-completions/_$(PROGNAME)

.PHONY: all install uninstall

# .BEGIN is ignored by GNU make so we can use it as a guard
.BEGIN:
	@head -3 Makefile
	@false
