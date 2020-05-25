# content of test_sample.py
def inc(x):
    return x + 1


def test_answer():
    import ipdb; ipdb.set_trace()
    assert inc(3) == 5
