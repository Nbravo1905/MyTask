import React from 'react'

export interface Task {
  id: string,
  text: string,
  pending: boolean,
  createAt: Date
}

export type PropsTypeTask = {
  id: string,
  text: string,
  pending: boolean,
  createAt: Date
}
