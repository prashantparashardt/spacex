import React from 'react'
import './Filter.css'

function Filter (props) {
  const launch_year = [
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
  ]
  const launch_success = ['true', 'false']
  const land_success = ['true', 'false']

  return (
    <div className='app_page_filter'>
      <div className='filter_div'>
        <div className='filter_data'>Filters</div>
        <div className='launch_year'>
          <p className='filter_title'>Launch Year</p>
          <hr className='filter_horizontal_row' />
          <div className='launch_year_button white_background'>
            {launch_year.map((year, index) => {
              return (
                <div
                  className={
                    props.launchYear == year
                      ? 'year_button selected'
                      : 'year_button'
                  }
                  key={index}
                  onClick={() => props.clickFilter(year, 'launch_year')}
                >
                  {year}
                </div>
              )
            })}
          </div>
        </div>
        <div className='launch_success'>
          <p className='filter_title'>Successful Launch</p>
          <hr className='filter_horizontal_row' />
          <div className='launch_success_button white_background'>
            {launch_success.map(success => (
              <div
                key={success}
                className={
                  props.launchSuccess === success
                    ? 'year_button selected'
                    : 'year_button'
                }
                onClick={() => props.clickFilter(success, 'launch_success')}
              >
                {success}
              </div>
            ))}
          </div>
        </div>
        <div className='land_success'>
          <p className='filter_title'>Successful Landing</p>
          <hr className='filter_horizontal_row ' />
          <div className='land_success_button white_background'>
            {land_success.map(success => (
              <div
                key={success}
                className={
                  props.landSuccess === success
                    ? 'year_button selected'
                    : 'year_button'
                }
                onClick={() => props.clickFilter(success, 'land_success')}
              >
                {success}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
