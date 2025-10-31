import React from 'react'

export default function NotFound() {
  return (
    <>
    <div className="d-flex align-items-center justify-content-center flex-column vh-100 bg-dark">
      <h1 className="fa-fade display-1 fw-bold text-danger mb-3">404</h1>
      <p className="fs-3 text-white text-uppercase">System Error</p>
      <p className="text-secondary mb-4">We can’t seem to find that page.</p>
      {/* <Link to="/" className="btn btn-danger px-4 py-2">Go Home</Link> */}
    </div>

    </>
  )
}
