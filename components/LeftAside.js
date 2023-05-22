import Link from 'next/link'
import React from 'react'

export default function LeftAside() {
  return (
    <aside class="col-3 a_tbdr">
        <ul class="nav flex-column">
        <li class="nav-item bg-primary mt-1 mb-1">
            <Link class="nav-link text-white active" href="/student"> Student - App Router</Link>
        </li>
        <li class="nav-item bg-primary mt-1 mb-1">
            <Link class="nav-link text-white" href="/teacher"> Teacher - App Router</Link>
        </li>
        <li class="nav-item bg-primary mt-1 mb-1">
            <Link class="nav-link text-white" href="/principal"> Principal - Page Router</Link>
        </li>
        <li class="nav-item bg-primary mt-1 mb-1">
            <a class="nav-link text-white disabled">Disabled</a>
        </li>
        </ul>
    </aside>
  )
}
