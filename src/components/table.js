import React from 'react'
import coloumns from './coloumns'
function table() {
  return (
    <table>
      <tbody>
        <tr>
        {/* for rows */}
        <coloumns />
        </tr>
      </tbody>
    </table>
  )
}

export default table
