import React from 'react'
// import * as StoreIcon from '../../../../public/assets/location.png'
import StoreIcon from '@mui/icons-material/Store';
import ForumIcon from '@mui/icons-material/Forum';
import HoverMenu from './MenuSelect';
import Link from 'next/link';
function SmallMenuCard() {
    return (
        <div className="small-menucard">
            <Link href={`/category/store`} >
            <div className="header-options">
                
                <StoreIcon sx={{ fontSize: 32 }} alt="store" />
                <div>
                    Store
                </div>
            </div>
            </Link>
            <Link href={`/category/community`} >
            <div className="header-options">
                <ForumIcon sx={{ fontSize: 32 }} alt="store" />
                <div>
                    Community
                </div>
            </div>
            </Link>
            {/* <HoverMenu /> */}
        </div>
    )
}

export default SmallMenuCard;