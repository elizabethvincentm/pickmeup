import React from 'react'
import Button from 'react-bootstrap/Button'

export const FindMe = ({ onLocationFind, status }) => (
  <div className="fixed-top text-center my-3" onClick={onLocationFind}>
    <Button>
      <div className="d-flex align-items-center">
        {status && (
          <div className="spinner-border text-info mr-3" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        Find Me
      </div>
    </Button>
  </div>
)
