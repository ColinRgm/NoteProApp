<?php

namespace App\Mail;

use App\Models\Branch;
use App\Models\Grade;
use App\Models\Module;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewGrade extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Grade $grade, public ?Module $module, public ?Branch $branch)
    {

    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Nouvelle note ajoutée',
        );
    }

    public function build()
    {
        return $this->view('email.newGrade')
            ->with([
                'grade' => $this->grade,
                'module' => $this->module,
                'branch' => $this->branch,
            ]);
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'email.newGrade',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
