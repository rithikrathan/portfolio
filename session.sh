#!/bin/bash

SESSION="portfolio"

tmux kill-session -t $SESSION 2>/dev/null

# editor window (shell first, then start nvim)
tmux new-session -d -s $SESSION -n "editor" -c "/home/godz/Desktop/projects/portfolio"
tmux send-keys -t $SESSION:editor "nvim ." C-m

# shell window
tmux new-window -t $SESSION -n "shell" -c "/home/godz/Desktop/projects/portfolio"

tmux select-window -t $SESSION:editor
tmux attach-session -t $SESSION
