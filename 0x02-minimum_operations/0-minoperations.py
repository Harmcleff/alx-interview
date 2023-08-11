#!/usr/bin/python3
""" Minimum operations interview coding challenge """


def minOperations(n: int) -> int:
    """ Calculates the minimum Operations

    Args:
        n (int): number of characters to copy and paste

    Returns:
        int: Minimum number of operations needed to result in exactly n H
    """
    if n <= 1:
        return 0

    clip = 0
    ops = 0
    char_len = 1

    while char_len < n:
        # if char_len is a factor of n do copy and paste
        if n % char_len == 0:
            # add copy ops
            ops += 1
            # save the number of characters in the clipboard
            clip = char_len
        # else just paste whats already in the clip
        char_len += clip
        # add paste ops
        ops += 1
    return ops
