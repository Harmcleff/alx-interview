#!/usr/bin/python3
""" Lockboxes interview coding challenge """

from typing import List


def canUnlockAll(boxes: List[list]) -> bool:
    """ checks if the all boxes can be unlocked

    Args:
        boxes (List[list]): List of boxes

    Returns:
        bool: True if all boxes can be unlocked else fals
    """
    unlocked_boxes = {}
    try:
        empty_index = boxes.index([])
        boxes[empty_index] = [0]
    except Exception:
        pass
    box_numbers = [x for x in range(len(boxes))]
    # print(some)
    unlocked_boxes[0] = 'unlocked'
    for i in range(len(boxes) - 1):
        for k in range(len(boxes[i])):
            if boxes[i][k] in box_numbers:
                unlocked_boxes[boxes[i][k]] = 'unlocked'

    opened = unlocked_boxes.values()
    if len(opened) != len(boxes):
        return False
    return True
