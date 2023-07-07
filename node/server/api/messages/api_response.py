# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from api.messages.base_model_ import Model
from api import util


class ApiResponse(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, msg=None, timestamp=None):  # noqa: E501
        """ApiResponse - a model defined in OpenAPI

        :param msg: The msg of this ApiResponse.  # noqa: E501
        :type msg: str
        :param timestamp: The timestamp of this ApiResponse.  # noqa: E501
        :type timestamp: datetime
        """
        self.openapi_types = {
            'msg': str,
            'timestamp': datetime
        }

        self.attribute_map = {
            'msg': 'msg',
            'timestamp': 'timestamp'
        }

        self._msg = msg
        self._timestamp = timestamp

    @classmethod
    def from_dict(cls, dikt) -> 'ApiResponse':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The ApiResponse of this ApiResponse.  # noqa: E501
        :rtype: ApiResponse
        """
        return util.deserialize_model(dikt, cls)

    @property
    def msg(self):
        """Gets the msg of this ApiResponse.


        :return: The msg of this ApiResponse.
        :rtype: str
        """
        return self._msg

    @msg.setter
    def msg(self, msg):
        """Sets the msg of this ApiResponse.


        :param msg: The msg of this ApiResponse.
        :type msg: str
        """
        if msg is None:
            raise ValueError("Invalid value for `msg`, must not be `None`")  # noqa: E501

        self._msg = msg

    @property
    def timestamp(self):
        """Gets the timestamp of this ApiResponse.


        :return: The timestamp of this ApiResponse.
        :rtype: datetime
        """
        return self._timestamp

    @timestamp.setter
    def timestamp(self, timestamp):
        """Sets the timestamp of this ApiResponse.


        :param timestamp: The timestamp of this ApiResponse.
        :type timestamp: datetime
        """
        if timestamp is None:
            raise ValueError("Invalid value for `timestamp`, must not be `None`")  # noqa: E501

        self._timestamp = timestamp