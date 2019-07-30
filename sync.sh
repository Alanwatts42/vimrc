#!/bin/zsh

# cli set-up with args: -h for help and -m for commit message
# great example for simple cli (command line interface) with basic args
usage="$(basename "$0") [-h] [-m "$1"] --a file sync utility that pushes your linux dotfiles to a github repository

where:
    -h show this help text
    -m create commit message (default:'auto-commit by df-sync')"
# continuous "" from `usage="` to `df-sync')"` for multi-line message
message="auto-commit by df-sync"
while getopts ':hm:' option; do
    case "$option" in
        h)  echo "$usage"
            exit
            ;;
        m)  message=$OPTARG
            ;;
        :)  printf "missing arguent for -%s\n" "$OPTARG" >&2
            echo "$usage" >&2
            exit 1
            ;;
        \?) printf "illegal option: -%s\n" "$OPTARG" >&2
            echo "$usage" >&2
            exit 1
            ;;
    esac
done
shift $((OPTIND - 1))
# to use this inside a function:
#  - use "$FUNCNAME" instead of "$(basename '$0')"
#  - add local OPTIND OPTARG before calling `getopts`
# reference(s): 
# <a href="https://stackoverflow.com/questions/5474732/how-can-i-add-a-help-method-to-a-shell-script?answertab=oldest#comment26510679_5476278">
# 1)stackoverflow-main-answer_subj=sh_script_args
# </a>

# switch to $HOME
cd $HOME

# dotfiles
cp $HOME/.vimrc $HOME/vimrc/.vimrc
cp $HOME/.aliases $HOME/vimrc/.aliases
cp $HOME/.bashrc $HOME/vimrc/.bashrc
cp $HOME/.zshrc $HOME/vimrc/.zshrc
cp $HOME/.gitconfig $HOME/vimrc/.gitconfig

# script(s)
cp $HOME/sync.sh $HOME/vimrc/sync.sh
cp $HOME/shinstall.sh $HOME/vimrc/shinstall.sh

# backup complete
echo "files copied to vimrc for backup"

# starting git commit & push
cd $HOME/vimrc
commit_message="$OPTARG" # commit message is $1 first standard input
git add --all
echo "committing changes to repo..."
git commit -m "$commit_message"
if [ $? -eq 0 ]; then
    echo "pushing files to remote..."
    git push
else
    echo "commit fail, trying add, then push..."
    git add --all
    git push
fi

echo "sync completed...  all your files are belong to...  well, you I suppose. Whatever, the point is that it's done, what more do you want from me?"
