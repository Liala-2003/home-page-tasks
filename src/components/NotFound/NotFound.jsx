import React from 'react'

export default function NotFound() {
  return (
    <>
    <div className="d-flex align-items-center justify-content-center flex-column vh-100 bg-dark">
      <h1 className="fa-fade display-1 fw-bold text-danger mb-3">مرحبا</h1>
      <p className="fs-3 text-white text-uppercase">هذا ايرووو</p>
      <p className="text-secondary mb-4">لا توجد هذه الصفحه من ضمن الصفحات المتاحه.</p>
      <Link to="/" className="btn btn-dark px-4 py-2">Go Home</Link>
    </div>

    </>
  )
}
