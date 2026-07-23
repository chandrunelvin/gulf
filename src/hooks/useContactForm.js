import { useCallback, useState } from 'react'

/**
 * Submits a contact/enquiry <form> to the backend mailer at /api/contact.
 * Reads fields via FormData off `name` attributes, so no controlled state per input.
 */
export default function useContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const submit = useCallback(async (formEl) => {
    const data = Object.fromEntries(new FormData(formEl).entries())
    setStatus('sending')
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'Failed to send message.')
      setStatus('success')
      formEl.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
    }
  }, [])

  return { status, errorMessage, submit }
}
