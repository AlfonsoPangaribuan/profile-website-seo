import Link from "next/link"
import { Github, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="font-bold text-xl">
              Alfonso Pangaribuan
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Mahasiswa Teknik Informatika di Institut Teknologi Sumatera (ITERA) dengan minat dalam pengembangan
              perangkat lunak dan teknologi informasi.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Tautan Cepat</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-sm text-muted-foreground hover:text-foreground">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/proyek" className="text-sm text-muted-foreground hover:text-foreground">
                  Proyek
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-sm text-muted-foreground hover:text-foreground">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/performa" className="text-sm text-muted-foreground hover:text-foreground">
                  Performa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Terhubung</h3>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://github.com/alfonsopangaribuan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://instagram.com/alfonsopangaribuan05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:alfonso.122140206@student.itera.ac.id"
                className="text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Alfonso Pangaribuan. Hak Cipta Dilindungi.
          </p>
          <p className="text-xs text-muted-foreground mt-4 md:mt-0">Dibuat dengan ❤️</p>
        </div>
      </div>
    </footer>
  )
}
