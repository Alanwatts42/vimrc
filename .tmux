set -sg default-terminal "screen-256color"
set -asg terminal-overrides ",xterm-256color:Tc,screen-256color:Tc"

set -g default-shell /bin/zsh

set -g base-index 1
set -g pane-base-index 1

unbind-key C-b
set -g prefix C-a
bind-key C-a send-prefix

