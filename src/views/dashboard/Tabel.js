import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Tabel.css'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
  } from  '@coreui/react'
  import CIcon from '@coreui/icons-react'
  import { DocsLink } from 'src/reusable'


const Data = ({
    hari,
    tanggal,
    waktu,
    agenda,
    lokasi,
    media,
    progress,
    ket,
    no
}) => {
    return(
    <tr>
        <td>{hari}</td>
        <td>{tanggal}</td>
        <td>{waktu}</td>
        <td>{agenda}</td>
        <td>{lokasi}</td>
        <td>{media}</td>
        <td>{progress}</td>
        <td>{ket}</td>
    </tr>
    )
}


function Tabel() {

    
        const [users, setUsers] = useState([])

        useEffect(() => {
            getData()
        }, [])

        const getData = () => {
            axios
            .get( 'https://sheet.best/api/sheets/a7037885-7b13-47bc-8963-4e49d36b2a0e',)
            .then((res) => {
                console.log('res', res)
                setUsers(res.data)
            })
        }
 
    return (


        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            JADWAL PIJAR KEMENAG KANWIL JABAR
            </CCardHeader>
            <CCardBody>

            <div class="table-responsive">
            
            <br/>  
            <table className="table table-bordered table-striped">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Hari</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Waktu</th>
                        <th scope="col">Agenda</th>
                        <th scope="col">Lokasi</th>
                        <th scope="col">Media</th>
                        <th scope="col">Progress</th>
                        <th scope="col">Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return(
                        <Data 
                            hari={user.Hari}
                            tanggal={user.tanggal}
                            waktu={user.Waktu}
                            agenda={user.agenda}
                            media={user.media}
                            lokasi={user.Lokasi}
                            progress={user.progress}
                            ket={user.ket}/>
                            )
                            })}
                </tbody>
                </table>
                 
        </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        )
    }

export default Tabel
