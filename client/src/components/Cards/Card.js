import React from 'react'

function Card() {
    return (
        <div class="card shadow-2xl shadow-card-bg-color (bg-gradient-to-r from-[#ffffff] to-[#ece9e6] w-80 h-[18rem] rounded-xl m-auto">
            <div class="relative">
                <img class="w-full rounded-md" src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
                <div id="description" class="absolute inset-x-0 bottom-0 bg-card-img-text-bg">
                    <span class="text-slate-50 text-2xl">Advanced OOP</span>
                </div>
            </div>
            <div id="description" class="px-4">
                <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 text-left">
                    <thead>
                        <tr>
                            <th>Upcoming</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Assignment 1: XML Parser</td>
                            <td>May 30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Card
