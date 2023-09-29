import React from 'react'
import styles from './LoaderMovies.module.css'

export default function LoaderMovies() {
  return (
    <>
      <div className={ styles.contentCamera }>
        <div className={ styles.filmCamera }>
          <div className={ styles.filmCameraBody }>
              <div className={ styles.filmCameraLens }></div>
              <p className={ styles.filmCameraLens2 }></p>
              <div className={ styles.filmCameraHandle }></div>
          </div>
            <div className={ styles.triangle }></div>
            <div className={ styles.light }></div>
        </div>
        {/* <div className={styles.loadingTextContainer}>
          <p className={`${styles.jumpText} ${styles.titlesFont}`}>L O A D I N G . . .</p>
        </div> */}
      </div>
      
    </>
    
  )
}
