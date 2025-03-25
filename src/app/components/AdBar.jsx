import Link from 'next/link'
import React from 'react'

function AdBar() {
    return (
        <div>
            <div className="ad-bar">
                Offer only for Today: 50% off select beauty products. <Link href="/"> SHOP NOW ▸</Link>
            </div>
        </div>
    )
}

export default AdBar