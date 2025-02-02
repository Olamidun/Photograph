import React from 'react'

function FollowCard() {
    return (
        <div>
            <div className="sidebar__profile flex justify-between mb-2">
                <div className="profile_main flex ">
                    <div className="profile__pics">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 follow__pics" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="follow__details flex flex-column" >
                        <span className="pm__links">kingjames</span>
                        <span className="status" >Outdoor Photographer</span>
                    </div>
                </div>
                <div></div>
                <div className="profile__follow1">
                    <button className="btn__follow rounded-sm">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FollowCard
