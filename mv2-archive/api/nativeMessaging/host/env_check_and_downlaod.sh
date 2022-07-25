#0
# brew check & download
if command -v brew --version &> /dev/null
  then brew --version
else echo "brew --version could not be found, try brew download"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# python3 check & download
if command -v python3 --version &> /dev/null
  then python3 --version
else echo "python3 --version could not be found"
    brew install python@3.9
fi

# python alias check & register
result1=$(python --version)
result2=$(python3 --version)
echo ${result1}
echo ${result2}
if [ "$result1" == "$result2" ]
 then echo "match"
else echo "python alias not match, add to ~/.bash_profile"
# python alias sh
 echo "alias python=python3" >> ~/.bash_profile
 echo "if [ -f ~/.bash_profile ]; then . ~/.bash_profile fi" >> ~/.bashrc

# alias 방식대신 symbolic link 로 path 지정
# export PATH=/usr/local/opt/python/libexec/bin:$PATH
fi

