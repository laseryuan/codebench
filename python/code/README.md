## 
Reference
https://sifranklin.wordpress.com/2017/08/21/pythons-equivalent-to-pry/
https://gist.github.com/mono0926/6326015

## Install
```
pip3 install ipdb pytest behave
pip3 install chevron pyyaml
```

## Usage

### Normal script
```
from IPython import embed

import ipdb; ipdb.set_trace()
```

Example
```
cd ~/python/
python ./code/examples/use_ipdb.py
my_var="OK"
print my_var
dir(my_var)
```

### Test environment
pythest
```
pytest tests/test_sample.py -s
```

behave
```
behave tests/features/tutorial.feature --no-capture
```

## Commnads
? for "help"
? s for "help for command s"
l for "some more context"
s for "step into"
n for "step over"
c for "continue to next breakpoint"
